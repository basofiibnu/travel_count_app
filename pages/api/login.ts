import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

type Data = {
  message?: string;
  data: string | unknown;
};

type Body = {
  email: string | any;
  password: string | any;
};

const BASE_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

export default async function login(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { email, password }: Body = JSON.parse(req.body);

  let params = new URLSearchParams();
  params.append('email', email);
  params.append('password', password);

  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };

  try {
    const response = await axios.post(
      `${BASE_URL}/api/authaccount/login`,
      params,
      config,
    );

    res
      .status(200)
      .send({ data: response.data, message: response.data.message });
  } catch (error) {
    res.status(500).send({ message: 'Login Error', data: error });
  }
}
