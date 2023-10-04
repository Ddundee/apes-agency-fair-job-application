"use client";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Form } from '@/components/ui/form'
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SelectSeparator } from '@/components/ui/select';
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from '@/components/ui/separator';
import Image from 'next/image'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"



export default function Home() {
  return (
    <div className=''>

      <div className='w-screen h-12' />
      <div className='flex justify-center'>
        <Card className="w-[450px]">
          <CardHeader>
            <CardTitle>Apply to BLM</CardTitle>
            <CardDescription>We are excited for you to join us.</CardDescription>
          </CardHeader>
          <CardContent>
            <form action="https://docs.google.com/forms/d/e/1FAIpQLSdoqVI-DYgmTQ-7GA8MRPljNfrU_0K4uqsS_Pp756GYPbjvug/formResponse">
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="First Name">First Name<span className='text-red-500'>*</span></Label>
                  <Input type="text" name="entry.150525527" placeholder="John" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="Last Name">Last Name<span className='text-red-500'>*</span></Label>
                  <Input type="text" name="entry.1336931973" placeholder="Doe" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="Email">Email<span className='text-red-500'>*</span></Label>
                  <Input type="email" name="entry.560974896" placeholder="johndoe@blm.org" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="Education">Education<span className='text-red-500'>*</span></Label>
                  <Input type="text" name="entry.3195978" placeholder="University of BLM (2004 - 2008)" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="Hobbies and Interest">Hobbies and Interest<span className='text-red-500'>*</span></Label>
                  <Input type="text" name="entry.2078395622" placeholder="Talking to environmentalists " />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="Resume">Resume<span className='text-red-500'>*</span></Label>
                  <Input type="file" placeholder="Talking to environmentalists " />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="Available Positions">Available Positions<span className='text-red-500'>*</span> &rarr; <span>Job Descriptions</span></Label>
                  <div className='flex flex-col gap-2'>
                  <Input type="text" name="entry.1900236221" placeholder="Junior IT Specialist, IT Specialist" />

                  </div>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="When can you start?">When can you start?<span className='text-red-500'>*</span></Label>
                  <div>
                    <Input type="date" name="entry.1510393242" placeholder="Talking to environmentalists " />
                  </div>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="Why do think you are fit for this/these position(s)?">Why do think you are fit for this/these position(s)?</Label>
                  <Input type="text" name="entry.230102209" placeholder="Because I am just better." />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="What do you think is the highlight of your career?">What do you think is the highlight of your career?</Label>
                  <Input type="text" name="entry.1503316010" placeholder="Joining BLM." />
                </div>

                <div className='h-2' />
              </div>
              <Button>Apply</Button>
            </form>
          </CardContent>
        </Card>
      </div>
      <div className='w-screen h-11' />
    </div>
  )
}
