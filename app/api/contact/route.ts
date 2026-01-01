import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, company, email, phone, type, message } = body;

        // Validation
        if (!name || !company || !email || !type || !message) {
            return NextResponse.json(
                { error: "必須項目が入力されていません" },
                { status: 400 }
            );
        }

        // Send email to Tensory
        const { data, error } = await resend.emails.send({
            from: "Tensory お問い合わせ <noreply@tensory.co.jp>",
            to: ["info@tensory.co.jp"],
            replyTo: email,
            subject: `【お問い合わせ】${type} - ${company} ${name}様`,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #1a2b4c; border-bottom: 2px solid #1a2b4c; padding-bottom: 10px;">
                        新しいお問い合わせがありました
                    </h2>
                    
                    <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                        <tr>
                            <td style="padding: 12px; background: #f5f5f5; font-weight: bold; width: 30%;">お名前</td>
                            <td style="padding: 12px; border-bottom: 1px solid #eee;">${name}</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px; background: #f5f5f5; font-weight: bold;">貴社名</td>
                            <td style="padding: 12px; border-bottom: 1px solid #eee;">${company}</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px; background: #f5f5f5; font-weight: bold;">メールアドレス</td>
                            <td style="padding: 12px; border-bottom: 1px solid #eee;">
                                <a href="mailto:${email}">${email}</a>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 12px; background: #f5f5f5; font-weight: bold;">電話番号</td>
                            <td style="padding: 12px; border-bottom: 1px solid #eee;">${phone || "未入力"}</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px; background: #f5f5f5; font-weight: bold;">お問い合わせ種別</td>
                            <td style="padding: 12px; border-bottom: 1px solid #eee;">${type}</td>
                        </tr>
                    </table>
                    
                    <div style="margin-top: 20px;">
                        <h3 style="color: #1a2b4c;">お問い合わせ内容</h3>
                        <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; white-space: pre-wrap;">
${message}
                        </div>
                    </div>
                    
                    <p style="margin-top: 30px; color: #666; font-size: 12px;">
                        このメールはTensoryホームページのお問い合わせフォームから自動送信されました。
                    </p>
                </div>
            `,
        });

        if (error) {
            console.error("Resend error:", error);
            return NextResponse.json(
                { error: "メール送信に失敗しました" },
                { status: 500 }
            );
        }

        // Send auto-reply to the customer
        await resend.emails.send({
            from: "Tensory <noreply@tensory.co.jp>",
            to: [email],
            subject: "【Tensory】お問い合わせを受け付けました",
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #1a2b4c;">お問い合わせありがとうございます</h2>
                    
                    <p>${name} 様</p>
                    
                    <p>
                        この度は株式会社Tensoryへお問い合わせいただき、誠にありがとうございます。<br>
                        以下の内容でお問い合わせを受け付けました。
                    </p>
                    
                    <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <p style="margin: 0 0 10px 0;"><strong>お問い合わせ種別：</strong>${type}</p>
                        <p style="margin: 0;"><strong>お問い合わせ内容：</strong></p>
                        <p style="white-space: pre-wrap; margin: 10px 0 0 0;">${message}</p>
                    </div>
                    
                    <p>
                        内容を確認の上、担当者より折り返しご連絡させていただきます。<br>
                        通常、2営業日以内にご返信いたしますので、今しばらくお待ちください。
                    </p>
                    
                    <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
                    
                    <p style="color: #666; font-size: 12px;">
                        株式会社Tensory<br>
                        〒150-6139 東京都渋谷区渋谷2-24-12<br>
                        渋谷スクランブルスクエア39F WeWork<br>
                        <a href="https://tensory.co.jp">https://tensory.co.jp</a>
                    </p>
                    
                    <p style="color: #999; font-size: 11px;">
                        ※このメールは自動送信されています。このメールへの返信はお控えください。
                    </p>
                </div>
            `,
        });

        return NextResponse.json({ success: true, id: data?.id });
    } catch (error) {
        console.error("API error:", error);
        return NextResponse.json(
            { error: "サーバーエラーが発生しました" },
            { status: 500 }
        );
    }
}

