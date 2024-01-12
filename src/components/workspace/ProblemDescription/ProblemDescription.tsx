import React from "react";
import {
  AiFillDislike,
  AiFillLike,
  AiFillStar,
  AiOutlineLoading3Quarters,
} from "react-icons/ai";
import { BsCheck2Circle } from "react-icons/bs";

type ProblemDescriptionProps = {};

const ProblemDescription: React.FC<ProblemDescriptionProps> = () => {
  return (
    <div className="bg-dark-layer-1">
      <div className="flex h-11 w-full items-center pt-2 bg-dark-layer-2 text-white overflow-x-hidden">
        <div
          className={
            "bg-dark-layer-1 rounded-t-[5px] px-5 py-[10px] text-xs cursor-pointer"
          }
        >
          Description
        </div>
      </div>
      <div className="flex px-0 py-4 h-[calc(100vh-94px)] overflow-y-auto">
        <div className="px-5">
          <div className="w-full">
            <div className="flex space-x-4">
              <div className="flex-1 mr-2 text-lg text-white font-medium">
                Problem Title
              </div>
            </div>
            <div className="flex items-center mt-3">
              <div
                className={` inline-block rounded-[21px] bg-opacity-[.15] px-2.5 py-1 text-xs font-medium capitalize text-orange-400 `}
              >
                Current Difficulty
              </div>
              <div className="rounded p-[3px] ml-4 text-lg transition-colors duration-200 text-green-s text-dark-green-s">
                <BsCheck2Circle />
              </div>
              <div className="flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 rounded p-[3px]  ml-4 text-lg transition-colors duration-200 text-dark-gray-6">
                <AiFillLike className="text-dark-blue-s" />
                <span className="text-xs">Likes</span>
              </div>
              <div className="flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 rounded p-[3px]  ml-4 text-lg transition-colors duration-200 text-green-s text-dark-gray-6">
                <AiFillDislike className="text-dark-blue-s" />

                <span className="text-xs">Dislike</span>
              </div>
              <div className="cursor-pointer hover:bg-dark-fill-3  rounded p-[3px]  ml-4 text-xl transition-colors duration-200 text-green-s text-dark-gray-6 ">
                <AiFillStar className="text-dark-yellow" />
              </div>
            </div>

            {/* Problem statement */}
            <div className="text-white text-sm">
              <div>
                <p>
                  Given an array of integers nums and an integer target, return
                  indices of the two numbers such that they add up to target.
                  You may assume that each input would have exactly one
                  solution, and you may not use the same element twice. You can
                  return the answer in any order.
                </p>
              </div>
            </div>

            {/* Examples */}
            <div className="mt-4">
              <div>
                <p className="font-medium text-white ">Example 1: </p>
                {/* {example.img && <img src={example.img} alt='' className='mt-3' />} */}
                <div className="example-card">
                  <pre>
                    <strong className="text-white">Input: </strong>nums =
                    [2,7,11,15], target = 9
                    <br />
                    <strong>Output: </strong>
                    [0,1] <br />
                    <>
                      <strong>Explanation:</strong> Because nums[0] + nums[1] ==
                      9, we return [0, 1].
                    </>
                  </pre>
                </div>
              </div>
            </div>
            {/* constraints */}
            <div className="my-8 pb-4">
              <div className="text-white text-sm font-medium">Constraints:</div>
              <ul className="text-white ml-5 list-disc ">
                <li>{`2 <= nums.length <= 104`}</li>
                <li>{`-109 <= nums[i] <= 109`}</li>
                <li>{`-109 <= target <= 109`}</li>
                <li>Only one valid answer exists.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemDescription;
