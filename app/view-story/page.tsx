"use client"
import { db } from '@/config/db'
import { StoryData } from '@/config/schema'
import { eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'

function ViewStory({params}:any) {
    const [story,setStory]=useState<any>();
    useEffect(()=>{
        console.log(params.id)
        getStory();
    }, [])

    const getStory=async()=>{
        const result=await db.select().from(StoryData)
        .where(eq(StoryData.storyId,params.id));
        console.log(result[0]);
        setStory(result[0]);
    }
  return (
    <div className='p-10 md:px-20 lg:px-40'>
      <h2 className='font-bold text-4xl text-center p-10 bg-primary text-white'>{story?.output?.story_cover?.title}</h2>
    </div>
  )
}

export default ViewStory
