import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

type Data = {
  message?: string;
  data: string | unknown;
  status: number;
};

type Body = {
  email: string | any;
  location: string | any;
  name: string | any;
  token: string;
  id: string;
};

const BASE_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

export default async function register(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { email, location, name, token, id }: Body = JSON.parse(
    req.body,
  );

  let params = new URLSearchParams();
  params.append('tourist_email', email);
  params.append('tourist_location', location);
  params.append('tourist_name', name);

  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.put(
      `${BASE_URL}/api/Tourist/${id}`,
      params,
      config,
    );

    res.status(200).send({
      data: response.data,
      message: 'successfully update this user',
      status: 200,
    });
  } catch (error) {
    res.status(500).send({
      message: 'failed to update this user',
      data: error,
      status: 500,
    });
  }
}
