import { NextRequest, NextResponse } from 'next/server'
import * as C from '@/const'
import { assert } from 'superstruct'
import { S_GetAnimeFullByIdRequest, S_GetAnimeFullByIdResponse } from '@/types/apis/jikan'
import { encode } from 'querystring'

export async function POST(req: NextRequest) {
  if (!req.body)
    return NextResponse.json(
      {
        message: 'No body provided',
      },
      {
        status: 400,
        statusText: 'Bad Request',
      },
    )

  try {
    const body = await req.json()
    assert(body, S_GetAnimeFullByIdRequest)

    const url = `${C.API.JIKAN.GET_ANIME_BY_ID_URL}?${encode(body)}`

    console.log(url)

    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const data = await res.json()
    console.log(data)
    assert(data, S_GetAnimeFullByIdResponse)

    return NextResponse.json(
      {
        data,
      },
      {
        status: 200,
        statusText: 'OK',
      },
    )
  } catch (err: any) {
    return NextResponse.json(
      {
        message: err.message,
      },
      {
        status: 500,
        statusText: 'Internal Server Error',
      },
    )
  }
}
