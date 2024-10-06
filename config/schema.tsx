import { json, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const StoryData=pgTable('storyData',{
    id:serial('id').primaryKey(),
    storyId:varchar('storyId'),
    storySubject:text('storySubject'),
    storyType:text('storyType'),
    ageGroup:text('ageGroup'),
    imageStyle:text('imageStyle'),
    output:json('output'),
    coverImage:varchar('coverImage'),
    userEmail:varchar('userEmail'),
    userName:varchar('userName'),
    userImage:varchar('userImage')
})