"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Link from "next/link";

const certificates = [
  {
    title: "AWS Solutions Architect Associate",
    date: "Jul 2022",
    issuer: "Amazon Web Services",
    image: "/aws-saa.png",
    link: "https://www.credly.com/badges/517e9984-f6bc-47c9-9d28-f9b0d317f029/public_url",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    date: "Jul 2021",
    issuer: "Amazon Web Services",
    image: "/aws-ccp.png",
    link: "https://www.credly.com/badges/f871c9c6-605e-4934-aaab-aa7a90f23d99/public_url"
  },
];

const Certificates = () => {
  return (
    <div className="space-y-20">
      <h1 className="heading mb-10">
        Certificates
      </h1>
      <div className="w-full space-y-10">
        {certificates.map((certificate) => (
          <CardContainer key={certificate.title} className="inter-var">
            <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900">
              <CardBody className="relative group/card max-w-4xl w-auto sm:w-[100vh] h-auto rounded-xl">
                <Link href={certificate.link} target="_blank">
                  <div className="flex items-center">
                    <CardItem translateZ="100">
                      <Image src={certificate.image} alt={certificate.title} className="w-[52px] sm:w-[100px] h-auto" width={100} height={100} />
                    </CardItem>
                    <div className="ml-12 flex-1 flex flex-col justify-center">
                      <div className="w-full flex items-center justify-between">
                        <h2 className="text-sm my-2 sm:text-xl lg:text-2xl font-bold">
                          {certificate.title}
                        </h2>
                        <p className="hidden sm:block whitespace-nowrap font-medium text-dark dark:text-light">
                          {certificate.date}
                        </p>
                      </div>
                      <p className="text-xs sm:text-base my-2 font-medium text-dark dark:text-light">
                        {certificate.issuer}
                      </p>
                    </div>
                  </div>
                </Link>
              </CardBody>
            </BackgroundGradient>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default Certificates;