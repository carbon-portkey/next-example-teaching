import { DEFAULT_BOX_STATE } from "../consts";
import { BoxState } from "../types";
import Color from "color";

export const getNextBoxesState = (
  text: string | null,
  currentState: Array<BoxState>
): Array<BoxState> => {
  const textShards = text?.split("_") || [];
  if (!isInputValid(text)) {
    return currentState;
  }
  return currentState.map((item) => {
    const [name, backgroundColor, borderRadius, borderWidth] = textShards;
    if (item.name !== name) {
      return item;
    }
    return {
      name,
      backgroundColor,
      borderRadius: parseInt(borderRadius),
      borderWidth: parseInt(borderWidth),
    };
  });
};

export const isInputValid = (text: string | null): boolean => {
  if (!text) return false;
  const textShards = text.split("_") || [];
  if (textShards.length !== 4) return false;
  const [name, backgroundColor, borderRadius, borderWidth] = textShards;
  if (!DEFAULT_BOX_STATE.some((item) => item.name === name)) return false;
  if (!backgroundColor || !isColorValid(backgroundColor)) return false;
  if (isNaN(parseInt(borderRadius)) || isNaN(parseInt(borderWidth)))
    return false;
  return true;
};

function isColorValid(color: string): boolean {
  try {
    new Color(color);
    return true;
  } catch (error) {
    return false;
  }
}
