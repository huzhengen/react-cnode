const selectedTag = { value: '全部' }

type ReduxAction = {
  type: string;
  payload: string;
}

export const tagReducer = (state = selectedTag, action: ReduxAction) => {
  const { type, payload } = action
  switch (type) {
    case 'change':
      return {
        value: payload
      }
      break;
    default:
      return state
      break;
  }
}