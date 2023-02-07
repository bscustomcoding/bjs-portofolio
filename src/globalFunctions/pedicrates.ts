export const checkForKeyValue = (objectState: any, conditionList: Array<string>, nestedObjectKey?: string) => {
    if (nestedObjectKey) {
        return loopObject(objectState, conditionList) && loopObject(objectState[nestedObjectKey], [])
    } 
    
    return loopObject(objectState, conditionList)
}

const loopObject = (objectState: any, conditionList: Array<string>) => {
    return Object.entries(objectState).every(([key, value]: any) => {
        if (conditionList.every((item: string) =>  key !== item)) {
          return key && value;
        } else return key;
      });
    };
