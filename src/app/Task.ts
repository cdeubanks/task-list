// interface. similar to a class.
export interface Task {
    id?: number; //optional because it will not have an id upon creation in the form but upon saving it in json server
    text: string;
    day: string;
    reminder: boolean;
}