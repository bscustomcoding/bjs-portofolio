/*
*
*
*      GLOBAL INTERFACES FOR GENERAL USE
*
*/
export type GlbObjectVoid = (state: ObjectType) => void;
export type GlbVoid = () => void;
export type GlbReturnSearchFunction = (data?: ArrayObjectType, searchString?: string) => ArrayObjectType
export type ArrayObjectType = Array<ObjectType>;
export type ObjectType = Record<string, any>;
export type GbComponentType = any;