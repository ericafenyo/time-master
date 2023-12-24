'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { useForm, SubmitHandler } from "react-hook-form"
import { useRouter } from 'next/navigation'

import { service } from "@packages/services/dist/services/activity"



type Inputs = {
  name: string;
  description: string;
}

const CreateActivity = () => {
  const { register, handleSubmit } = useForm<Inputs>()
  const router = useRouter()

  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    await service.create(data);
    router.replace("/dashboard/activities")
  }

  return (
    <section className="bg-white">
      <div className="container max-w-md">

        <form onSubmit={handleSubmit(onSubmit)}>

          <Label htmlFor="name">Activity name</Label>
          <div className="py-2">
            <Input placeholder="Please enter an activity name"  {...register("name")} />
          </div>

          <div className="py-2">
            <Label htmlFor="description">Description</Label>
            <Input placeholder="Please enter a description" {...register("description")} />
          </div>

          <div className="py-2">
            <Button type="submit" className="w-full">Create activity</Button>
          </div>
        </form>

      </div>
    </section >
  )
}

export default CreateActivity
