export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-26'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)


export const token = assertValue(
  "skbZvZAaVdux1u9JJH0sJ5NApOGQKa0N10XBM56C6BD890Rs1Qgp4JZVY23Dq8F3y1R3ajp5MGybqKFMVqu2QwfvR0r9AkeeijMuvCoPy5vRrxZ9rWiwzZwESWCUC3i80SLpbHMJbn6gJo9FchDIzcmAVEmT7UnqVoTpOTpqBZVBk3ECRIin",
  'Missing environment variable:SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
