type Author = {
  "loginname": string,
  "avatar_url": string,
}

type Topic = {
  "id": string,
  "author_id": string,
  "tab": string,
  "content": string,
  "title": string,
  "last_reply_at": string,
  "good": boolean,
  "top": boolean,
  "reply_count": number,
  "visit_count": number,
  "create_at": string,
  "author": Author,
}

type SelectedTag = {
  value: string
}

type SelectedTagState = {
  tag: SelectedTag
}