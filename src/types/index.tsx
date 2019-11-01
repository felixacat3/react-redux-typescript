export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

interface IAddTodoAction {
    type: typeof ADD_TODO;
    id: number;
    text: string;
    completed: boolean;
}

interface IToggleTodoAction {
    type: typeof TOGGLE_TODO;
    id: number;
}

export type TodoActions = IAddTodoAction | IToggleTodoAction;

export interface ITodo {
    id: number;
    text: string;
    completed: boolean;
}

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

interface ISetVisibilityFilterAction{
    type: typeof SET_VISIBILITY_FILTER;
    filter: string;
}

export type VisibilityFilterAction = ISetVisibilityFilterAction;