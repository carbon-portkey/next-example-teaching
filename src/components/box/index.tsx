"use client";
import { BoxState } from "@/src/types";
import { useMemo } from "react";

export interface UserBoxProps {
  item: BoxState;
}

export const UserBox = ({ item }: UserBoxProps) => {
  const { name, backgroundColor, borderRadius, borderWidth } = item;
  const containerStyle = useMemo(() => {
    return {
      backgroundColor,
      borderRadius,
      borderWidth,
      borderStyle: "solid",
      borderColor: "black",
      width: 100,
      height: 100,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: 10,
    };
  }, [backgroundColor, borderRadius, borderWidth]);
  return (
    <>
      <div style={containerStyle}>{name}</div>
    </>
  );
};
