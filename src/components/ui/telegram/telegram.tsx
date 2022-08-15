import React from "react";

type TelegramProps = {}

const Telegram: React.FC<TelegramProps> = () => {
  return (
    <div className="bg-white border border-gray-200 rounded p-4">
      <p className="text-center mb-4">Телеграм канал по осознанным сновидениям, в котором собраны десятки книг.</p>
      <a href="https://t.me/hacker_os" className="cursor-pointer w-full flex items-center justify-center bg-blue-600 rounded text-white p-2">Подписаться</a>
    </div>
  )
}

export default Telegram