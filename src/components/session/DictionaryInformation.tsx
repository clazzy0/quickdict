/* eslint-disable react/no-unescaped-entities */
"use client"

import { useState } from "react"

export default function DictionaryInformation() {
  return (
    <div className="flex flex-col w-full text-center border-gray-800 border rounded-md p-10 items-start gap-3">
      <h1 className="font-bold text-5xl">serenity</h1>
      <h3 className="font-semibold text-lg text-gray-700">[rɪ'pəlʃən]</h3>
      <div className="flex mx-auto h-0.5 w-full bg-gray-700" />
      <h2 className="italic text-lg">noun</h2>

      <li>the absence of mental stress or anxiety</li>
      <div className="ml-5 flex flex-row gap-3">
        <p className="">Similar: peace, repose, heartsease</p>
      </div>
      <li>a disposition free from stress or emotion</li>
      <div className="ml-5 flex flex-row gap-3">
        <p className="">Similar: quiet, tranquility, placidity</p>
        <p></p>
      </div>
    </div>
  )
}
