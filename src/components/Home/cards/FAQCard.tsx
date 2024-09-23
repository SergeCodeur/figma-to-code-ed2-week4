'use client'
import { ArrowDown } from '@/assets/icons'
import { FAQProps } from '@/types'
import React from 'react'
import { useState } from 'react'

const FAQCard = ({ question, reponse }: FAQProps) => {
    const [showReponse, setShowReponse] = useState(false);

    const toggleReponse = () => {
        setShowReponse(!showReponse);
    };



    return (
        <div className='w-full container'>
            <div>
                <div className={`w-full flex items-center justify-between border rounded-xl p-5 ${showReponse ? "flex-col" : "flex-row"}`}>
                    <div className='w-full flex items-center justify-between'>
                        <div>{question}</div>
                        <div className='rounded-full border flex items-center justify-between' onClick={toggleReponse}>
                            {
                                showReponse ? (
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.5 5C12.5 5 7.50001 8.68242 7.5 10C7.49999 11.3177 12.5 15 12.5 15" stroke="#274760" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                ) : (
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 7.50004C15 7.50004 11.3176 12.5 10 12.5C8.68233 12.5 5 7.5 5 7.5" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                )
                            }
                        </div>
                    </div>
                    {
                        showReponse && (<div>
                            <hr />
                            <div>
                                {reponse}
                            </div>
                        </div>)
                    }
                </div>
            </div>


        </div>
    )
}

export default FAQCard
