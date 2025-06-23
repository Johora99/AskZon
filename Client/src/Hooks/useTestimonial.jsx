import React from 'react'
import axios from 'axios'
import useAxiosPublic from './useAxiosPublic'
import { useQuery } from '@tanstack/react-query'

export default function useTestimonial() {
  // const axiosPublic = useAxiosPublic()
  const {data: testimonials = [], isLoading, refetch} = useQuery({
    queryKey: ['testimonial'],
    queryFn: async ()=>{
      const {data} = await axios.get('/testimonials.json')
      return data
    }
  })
  return{testimonials, isLoading, refetch}
}



