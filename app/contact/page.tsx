"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";

const formSchema = z.object({
    name: z.string().min(1, { message: "お名前を入力してください" }),
    company: z.string().min(1, { message: "貴社名を入力してください" }),
    email: z.string().email({ message: "正しいメールアドレスを入力してください" }),
    phone: z.string().optional(),
    type: z.string().min(1, { message: "お問い合わせ種別を選択してください" }),
    message: z.string().min(10, { message: "お問い合わせ内容は10文字以上で入力してください" }),
    privacy: z.boolean().refine((val) => val === true, { message: "プライバシーポリシーへの同意が必要です" }),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        setError(null);

        // Simulate API call
        try {
            await new Promise((resolve) => setTimeout(resolve, 1500));
            console.log("Form Data:", data);
            setIsSubmitted(true);
            reset();
        } catch (e) {
            setError("送信中にエラーが発生しました。時間をおいて再度お試しください。");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-tensor-blue mb-4">Contact</h1>
                        <p className="text-gray-500 font-bold tracking-widest uppercase mb-6">お問い合わせ</p>
                        <p className="text-gray-600">
                            AI導入のご相談、研修・ワークショップのご依頼、その他弊社サービスについてのご質問は<br className="hidden md:block" />
                            以下のフォームよりお気軽にお問い合わせください。
                        </p>
                    </div>

                    {isSubmitted ? (
                        <div className="text-center py-20">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                                <CheckCircle2 className="text-green-600 w-10 h-10" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">お問い合わせありがとうございます</h2>
                            <p className="text-gray-600 mb-8">
                                内容を確認の上、担当者より折り返しご連絡させていただきます。<br />
                                今しばらくお待ちください。
                            </p>
                            <button
                                onClick={() => setIsSubmitted(false)}
                                className="text-tensor-blue underline hover:text-sky-blue"
                            >
                                お問い合わせフォームに戻る
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                            {/* Name & Company */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-bold text-gray-700">
                                        お名前 <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        {...register("name")}
                                        className="w-full px-4 py-3 bg-gray-50 border-b border-gray-300 focus:border-tensor-blue focus:outline-none transition-colors"
                                        placeholder="山田 太郎"
                                    />
                                    {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="company" className="text-sm font-bold text-gray-700">
                                        貴社名 <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        id="company"
                                        type="text"
                                        {...register("company")}
                                        className="w-full px-4 py-3 bg-gray-50 border-b border-gray-300 focus:border-tensor-blue focus:outline-none transition-colors"
                                        placeholder="株式会社Tensory"
                                    />
                                    {errors.company && <p className="text-red-500 text-xs">{errors.company.message}</p>}
                                </div>
                            </div>

                            {/* Email & Phone */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-bold text-gray-700">
                                        メールアドレス <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        {...register("email")}
                                        className="w-full px-4 py-3 bg-gray-50 border-b border-gray-300 focus:border-tensor-blue focus:outline-none transition-colors"
                                        placeholder="info@tensory.co.jp"
                                    />
                                    {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-bold text-gray-700">
                                        電話番号
                                    </label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        {...register("phone")}
                                        className="w-full px-4 py-3 bg-gray-50 border-b border-gray-300 focus:border-tensor-blue focus:outline-none transition-colors"
                                        placeholder="03-1234-5678"
                                    />
                                </div>
                            </div>

                            {/* Type */}
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700">
                                    お問い合わせ種別 <span className="text-red-500">*</span>
                                </label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {[
                                        "AI研修・ワークショップについて",
                                        "AIアプリ・システム開発について",
                                        "営業支援（セールスイネーブルメント）について",
                                        "技術継承（ナレッジトランスファー）について",
                                        "協業・パートナーシップのご相談",
                                        "その他"
                                    ].map((type) => (
                                        <label key={type} className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                                            <input
                                                type="radio"
                                                value={type}
                                                {...register("type")}
                                                className="h-4 w-4 text-tensor-blue focus:ring-tensor-blue"
                                            />
                                            <span className="text-sm text-gray-700">{type}</span>
                                        </label>
                                    ))}
                                </div>
                                {errors.type && <p className="text-red-500 text-xs">{errors.type.message}</p>}
                            </div>

                            {/* Message */}
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-bold text-gray-700">
                                    お問い合わせ内容 <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    rows={6}
                                    {...register("message")}
                                    className="w-full px-4 py-3 bg-gray-50 border-b border-gray-300 focus:border-tensor-blue focus:outline-none transition-colors resize-none"
                                    placeholder="ご相談内容を詳しくご記入ください。"
                                ></textarea>
                                {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}
                            </div>

                            {/* Privacy */}
                            <div className="space-y-2">
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        {...register("privacy")}
                                        className="h-4 w-4 text-tensor-blue rounded border-gray-300 focus:ring-tensor-blue"
                                    />
                                    <span className="text-sm text-gray-600">
                                        <a href="/privacy" className="text-tensor-blue hover:underline">プライバシーポリシー</a>（個人情報の取り扱い）に同意する
                                    </span>
                                </label>
                                {errors.privacy && <p className="text-red-500 text-xs">{errors.privacy.message}</p>}
                            </div>

                            {error && (
                                <div className="p-4 bg-red-50 text-red-600 rounded-lg flex items-center gap-2">
                                    <AlertCircle size={20} />
                                    <span>{error}</span>
                                </div>
                            )}

                            <div className="text-center pt-4">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full md:w-auto px-16 py-4 bg-tensor-blue text-white font-bold rounded-full hover:bg-sky-blue transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center mx-auto"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="animate-spin mr-2" /> 送信中...
                                        </>
                                    ) : (
                                        "送信する"
                                    )}
                                </button>
                                <p className="mt-4 text-sm text-gray-500">
                                    送信完了後、自動返信メールをお送りします。
                                </p>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
