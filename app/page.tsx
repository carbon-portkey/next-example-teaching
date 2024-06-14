"use client";
import { UserBox } from "@/src/components/box";
import { DEFAULT_BOX_STATE } from "@/src/consts";
import React, { CSSProperties, useCallback, useState } from "react";
import { Input } from "antd";
import { getNextBoxesState, isInputValid } from "@/src/tools";

export default function Home() {
  const [boxStates, setBoxStates] = useState(DEFAULT_BOX_STATE);
  const [errorText, setErrorText] = useState<string | null>(null);
  const dealWithInputText = useCallback((text: string | null) => {
    console.log(text);
    if (!text) {
      setErrorText(null);
      return;
    }
    const isValid = isInputValid(text);
    if (!isValid) {
      setErrorText("Invalid input");
      return;
    }
    setErrorText(null);
    setBoxStates((currentState) => getNextBoxesState(text, currentState));
  }, []);
  return (
    <div style={styles.wrap}>
      <Input
        style={styles.input}
        width={800}
        status={errorText ? "error" : ""} /** show error */
        placeholder={"name_backgroundColor_borderRadius_borderWidth"}
        onChange={(event) => dealWithInputText(event.target.value)}
      />
      <div style={styles.boxContainer}>
        {boxStates.map((item, index) => (
          <UserBox item={item} key={index} />
        ))}
      </div>
    </div>
  );
}

const styles: { [x: string]: CSSProperties } = {
  wrap: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "space-between",
    flexWrap: "wrap",
    padding: 20,
  },
  input: {
    maxWidth: 400,
    alignSelf: "center",
  },
  boxContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 20,
  },
};
