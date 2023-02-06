export const checkForKeyValue = (state: any, conditionList: Array<string>) => {
  return loopObject(state, conditionList)
}

const loopObject = (state: any, conditionList: Array<string>) => {
    return Object.entries(state).every(([key, value]: any) => {
        if (conditionList.every((item: string) =>  key !== item)) {
          return key && value;
        } else return key;
      });
    };