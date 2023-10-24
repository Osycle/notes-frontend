
export function toFormData(object = {}) {
  const form = new FormData();

  try {
    Object.keys(object).map((objectKey) => {
      let pushFinally = true;
      let value = object[objectKey];
      if (objectKey === "remind_at") {
        value = value.toISOString();
      } else if (value instanceof File) {
        form.append(objectKey, value);
        pushFinally = false;
      } else if (Array.isArray(value)) {
        for (let i = 0; i < value.length; i++) {
          form.append(`${objectKey}[]`, value[i]);
        }
        pushFinally = false;
      } else if (typeof value === "object" && value !== null) {
        Object.keys(value).map((obKey, index) => {
          let v = value[obKey];
          form.append(`${objectKey}[${obKey}]`, v);
        });

        pushFinally = false;
      }

      if (pushFinally === true) {
        form.append(objectKey, value);
      }
    });
  } catch (error) {}

  return form;
}