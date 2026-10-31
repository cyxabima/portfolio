'use client'

import { z } from 'zod'
import Link from 'next/link'
import { toast } from 'sonner'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { NewsletterFormSchema } from '@/lib/schemas'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import { subscribe } from '@/lib/actions'

type Inputs = z.infer<typeof NewsletterFormSchema>

export default function NewsletterForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting }
    } = useForm<Inputs>({
        resolver: zodResolver(NewsletterFormSchema),
        defaultValues: {
            email: ''
        }
    })

    const processForm: SubmitHandler<Inputs> = async data => {
        const result = await subscribe(data)

        if (result?.error) {
            toast.error('An error occurred! Please try again.')
            return
        }

        toast.success('Subscribed successfully!')
        reset()
    }

    return (
        <section className='border-border border-t pt-8'>
            <div className='flex flex-col gap-8 md:flex-row md:justify-between'>
                <div>
                    <h2 className='font-serif text-2xl font-semibold'>
                        Subscribe to my newsletter
                    </h2>
                    <p className='text-foreground/70 mt-1 text-[15px]'>
                        Get updates on my work and projects.
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit(processForm)}
                    className='flex flex-col items-start gap-3'
                >
                    <div className='w-full'>
                        <Input
                            type='email'
                            id='email'
                            autoComplete='email'
                            placeholder='Email'
                            className='w-full'
                            {...register('email')}
                        />

                        {errors.email?.message && (
                            <p className='mt-2 ml-1 text-sm text-rose-400'>
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    <div className='w-full'>
                        <Button
                            type='submit'
                            disabled={isSubmitting}
                            className='w-full disabled:opacity-50'
                        >
                            {isSubmitting ? 'Submitting...' : 'Subscribe'}
                        </Button>
                    </div>

                    <div>
                        <p className='text-muted-foreground mt-1 text-xs'>
                            We care about your data. Read our{' '}
                            <Link href='/privacy' className='font-bold'>
                                privacy&nbsp;policy.
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </section>
    )
}
