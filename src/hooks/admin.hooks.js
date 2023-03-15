import { useMutation, useQuery } from '@tanstack/react-query';
import { getPendingPayments, verifyPayment, verifyAdmin, loginAdmin } from '../api';
import errorParser from '../utils/errorParser';
import { toast } from '../components';

function useLoginAdmin(setErrors) {
  const { mutate, isLoading, isSuccess, isError, data, error } = useMutation(loginAdmin, {
    onError: (err) => {
      const parsedError = errorParser(err)
      parsedError.error && toast.error(parsedError.error, { autoClose: 5000 })
      setErrors(prevErrors => {
        for (const key in prevErrors) {
          if (parsedError.hasOwnProperty(key)) {
            prevErrors[key] = parsedError[key]
          }
        }
        return prevErrors
      })
      toast.error('Errors in the login form. Please try again.', { autoClose: 5000 })
    }
  })
  return { mutate, isLoading, isSuccess, isError, data, error }
}

function usePendingPayments(setErrors, eventName) {
  const { isLoading, isSuccess, isError, data, error, refetch } = useQuery({ queryKey: ['pendingPayments', eventName], queryFn: getPendingPayments(eventName), enabled: !!eventName })
  if (isError) {
    const parsedError = errorParser(error)
    parsedError.error && toast.error(parsedError.error, { autoClose: 5000 })
    setErrors(prevErrors => {
      for (const key in prevErrors) {
        if (parsedError.hasOwnProperty(key)) {
          prevErrors[key] = parsedError[key]
        }
      }
      return prevErrors
    })
    toast.error('Errors in the registration form. Please check the form and try again.', { autoClose: 5000 })
  }
  else if (isSuccess) {
    setErrors(prevErrors => {
      for (const key in prevErrors) {
        prevErrors[key] = ''
      }
      return prevErrors
    })
    return data
  }
  return { isLoading, isSuccess, data, refetch }
}

function useVerifyAdmin() {
  const { isLoading, isSuccess, isError, data, error } = useQuery({ queryKey: ['verifyAdmin'], queryFn: verifyAdmin, retry: false })

  if (isError) {
    const parsedError = errorParser(error)
    parsedError.error && toast.error(parsedError.error, { autoClose: 5000 })
  }
  return { isLoading, isSuccess, isError, data, error }
}


function useVerifyPayment(setErrors, eventName) {
  const { mutate, isLoading, isSuccess, isError, data, error } = useMutation(verifyPayment(eventName), {
    onError: (err) => {
      const parsedError = errorParser(err)
      parsedError.error && toast.error(parsedError.error, { autoClose: 5000 })
      setErrors(prevErrors => {
        for (const key in prevErrors) {
          if (parsedError.hasOwnProperty(key)) {
            prevErrors[key] = parsedError[key]
          }
        }
        return prevErrors
      })
      toast.error('Errors in the registration form. Please check the form and try again.', { autoClose: 5000 })
    }
  })
  return { mutate, isLoading, isSuccess, isError, data, error }
}

export {
  useLoginAdmin,
  usePendingPayments,
  useVerifyPayment,
  useVerifyAdmin
}