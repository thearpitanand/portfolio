import resumeData from "../../../resumeData";
import type { NextApiRequest, NextApiResponse } from "next";

type resumeData = {
  main: Object;
  resume: Object;
  portfolio: Object;
  testimonials: Object;
};

const data = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(resumeData);
};

export default data;
