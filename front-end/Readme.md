# Assignment 1 

### Tech Stack -> MERN 


# Components

## Button

| Prop      | Description                                                                 | Type                                            |
| --------- | --------------------------------------------------------------------------- | ----------------------------------------------- |
| children* | Button Text                                                                 | React node                                      |
| variant*  | Contained, Outlined or Text                                                 | string (use from src/common/data/ButtonData.ts) |
| color*    | Use color prop to apply theme color palette to component                    | string (use from src/common/data/ButtonData.ts) |
| disabled  | For disabling button                                                        | boolean                                         |
| loading   | Offers loading buttons that can show loading state and disable interactions | boolean                                         |
| hidden    | For hidding the hidden                                                      | boolean                                         |
| onClick   | onClick function will run on clicking                                       | function                                        |
| size*     | For larger or smaller icon buttons, use the size prop                       | string (use from src/common/data/ButtonData.ts) |
| leftIcon  | React icon for left side                                                    | react icon                                      |
| rightIcon | React icon for right side                                                   | react icon                                      |
| type      | Type of the button                                                          | string - "button" "submit" "reset"              |


## TextField

| Prop         | Description                                   | Type     |
| ------------ | --------------------------------------------- | -------- |
| type*        | Type of input -> text, password etc           | string   |
| placeholder* | Placeholder of the input field                | string   |
| title        | title of the input field                      | string   |
| name*        | name of the input field                       | string   |
| required     | is the field required to fill or not          | boolean  |
| label*       | label of the field                            | string   |
| value        | value of the field                            | string   | number    |
| onChange     | onChange event                                | function |
| error        | error.${name}.message from useForm()          | string   | undefined |
| register     | register from useForm()                       | any      |
| isSchema     | Is validation required for this input or not? | boolean  |



## AppForm

| Prop       | Description          | Type            |
| ---------- | -------------------- | --------------- |
| children*  | TextField components | React.ReactNode |
| onSubmit*  | onSubmit function    | function        |
| className* | CSS classes          | string          |