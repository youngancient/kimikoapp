'use_client'
import { useEffect } from "react";
import { UserTypeOptions } from "@/components/Auth/Auth";
import {
  BackButton,
  Mail,
  NameIcon,
  ShowPwd,
  WhiteLogoPin,
} from "@/components/Icons/Icons";
import { ErrorStyles } from "@/styles/Auth/Login";
import { AuthStyles, SignupStyles } from "@/styles/Auth/Signup";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { scroll, scrollSepolia } from 'viem/chains';
import { useReadContract, useAccount, useWriteContract, useConnect} from 'wagmi';
import {Contract_ABI } from "../../components/contract/contract_abi";
import { injected } from 'wagmi/connectors';
import { ethers } from 'ethers';
import { Provider } from "ethers";
import { WagmiProvider } from "wagmi";

export interface IUserType {
  name: "Patient" | "Doctor";
  isSelected: boolean;
}
const AllUserTypes: IUserType[] = [
  { name: "Patient", isSelected: false },
  { name: "Doctor", isSelected: false },
];
interface IForm {
  name: string;
  specialty: string;
}
const contractAddress = '0x8251aEA64aa7d28B9f536f7eb1E1db0BbC8b6386';

const SignUp =  () => {
  const [userType, setUserType] = useState<string | undefined>();
  const [savedUserTypes, setSavedUserTypes] = useState(AllUserTypes);
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({})

  // const { data: signer } = useSigner();
  console.log("Connected Address:", address);
  console.log("Is Connected:", isConnected);
  // interface DoctorDetails {
  //   id: number;
  //   name: string;
  //   specialty: string;
  // }





const contractAddress = '0x8251aEA64aa7d28B9f536f7eb1E1db0BbC8b6386';

  const { data:createdDoctor, error, isLoading, isSuccess } = useReadContract({
    abi: Contract_ABI,
    address: contractAddress,
    functionName: "getDoctorDetails",
    account: address,
  });
  useEffect(() => {
    console.log("Contract Address:", contractAddress);
    console.log("ABI:", Contract_ABI);
    console.log("Is Loading:", isLoading);
    console.log("Is Success:", isSuccess);
    console.log("Doctor Details Fetched:", createdDoctor);
    
  }, [createdDoctor, contractAddress, error, isLoading, isSuccess]);
  
  const selectUserType = (name: string) => {
    const newUserTypes = savedUserTypes.map((ele) => {
      return { ...ele, isSelected: name === ele.name };
    });
    console.log(newUserTypes);
    setSavedUserTypes(newUserTypes);
  };




  const saveUserType = () => {
    const selectedType = savedUserTypes.find((ele) => ele.isSelected == true);
    if (selectedType?.name == "Patient") {
      router.push("/dashboard/patient");
    }
    else if (!isLoading && createdDoctor) {
      router.push("/dashboard/professional");
    } else if (!isLoading && !createdDoctor) {
      setUserType(selectedType?.name);
    }
    console.log(createdDoctor);
  }



  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    mode: "onBlur",
    defaultValues: {
      name: "",
      specialty: "",
    },
  });
  const { writeContract, writeContractAsync } = useWriteContract();
  const router = useRouter();
  const signup = (data: IForm) => {
    console.log(data);
    try {
      const result = writeContractAsync({
        address: contractAddress,
        abi: Contract_ABI,
        functionName: 'addDoctor',
        args: [data.name, data.specialty],
      });
      console.log('Dotor SignUp', result);
    } catch (error) {
      console.error('Error signing up:', error);
    }
  }
  
  return (
    <>
      <Head>
        <title>Signup</title>
        <meta name="description" content="Create an account" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SignupStyles>
        <div className="fl">
          <div className="logo-div-mobile">
            <WhiteLogoPin />
          </div>
          <div className="logo-div-desktop">
            <WhiteLogoPin />
          </div>
          <div className="form-div">
            <BackButton href="/" />
            {userType ? (
              <>
                <div className="intro">
                  <h3>Create Account</h3>
                  <p>Manage Your Meds Like a Pro with Kimiko</p>
                </div>
                <form onSubmit={handleSubmit(signup)}>
                  <div className="fg">
                    <div className="form-ele">
                      <label htmlFor="">Name</label>
                      <div className="inp">
                        <input
                          type="text"
                          {...register("name", {
                            required: "A name is required",
                          })}
                          id="name"
                          placeholder="Dr Flickr"
                        />
                        <NameIcon />
                      </div>
                      {errors?.name && errors.name.message && (
                        <ErrorStyles>Name is required</ErrorStyles>
                      )}
                    </div>
                    <div className="form-ele">
                      <label htmlFor="">Specialization</label>
                      <div className="inp">
                        <input
                          type="text"
                          {...register("specialty", {
                            required: "specialty is required",
                          })}
                          id="role"
                          placeholder="Gynacologist"
                        />
                        <Mail />
                      </div>
                      {errors?.specialty && errors.specialty.message && (
                        <ErrorStyles> specialty is required</ErrorStyles>
                      )}
                    </div>
                  </div>
                  <div className="btn">
                    <button type="submit">Create Account</button>
                  </div>
                </form>
              </>
            ) : (
              <>
                <div className="intro">
                  <h3>Welcome to Kimiko!</h3>
                  <p>
                    Are you a medical professional who wants to track patients
                    or you are a patient? Help us know
                  </p>
                </div>
                <div className="choose">
                  {savedUserTypes.map((ele, index) => (
                    <UserTypeOptions
                      key={index}
                      name={ele.name}
                      isSelected={ele.isSelected}
                      handleSelect={() => selectUserType(ele.name)}
                    />
                  ))}
                </div>
                <div className="btn">
                  <button type="button" onClick={saveUserType}>
                    Next
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </SignupStyles>
    </>
  );

}
export default SignUp;
