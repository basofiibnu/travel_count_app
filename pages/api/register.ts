import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

type Data = {
  message?: string;
  data: string | unknown;
  status: number;
};

type Body = {
  email: string | any;
  password: string | any;
  name: string | any;
};

const BASE_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

export default async function register(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { email, password, name }: Body = JSON.parse(req.body);

  let params = new URLSearchParams();
  params.append('email', email);
  params.append('password', password);
  params.append('name', name);

  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };

  try {
    const response = await axios.post(
      `${BASE_URL}/api/authaccount/registration`,
      params,
      config,
    );

    res
      .status(200)
      .send({
        data: response.data,
        message: 'Registration Success',
        status: 200,
      });
  } catch (error) {
    res
      .status(500)
      .send({
        message: 'Registration Error',
        data: error,
        status: 500,
      });
  }
}
