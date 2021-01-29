import { useCallback, useState } from "react";
import styled from "styled-components";

export const Contact = () => {
  const [name, setName] = useState(""),
    [email, setEmail] = useState(""),
    [description, setDescription] = useState("");

  const inputName = useCallback(
    (e) => {
      setName(e.target.value);
    },
    [setName]
  );

  const inputEmail = useCallback(
    (e) => {
      setEmail(e.target.value);
    },
    [setEmail]
  );

  const inputDescription = useCallback(
    (e) => {
      setDescription(e.target.value);
    },
    [setDescription]
  );

  const validateInput = (...args) => {
    let isBlank = false;
    for (let i = 0; i < args.length; i = (i + 1) | 0) {
      if (args[i] === "") {
        isBlank = true;
      }
    }
    return isBlank;
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return regex.test(email);
  };

  const submitForm = () => {
    const isBlank = validateInput(name, email, description);
    const isValidateEmail = validateEmail(email);

    if (isBlank) {
      alert("必須入力が未入力です");
    } else if (!isValidateEmail) {
      alert("メールアドレスの書式が異なります。");
    } else {
      const payload = {
        text:
          "お問い合わせがありました\n" +
          "お名前:" +
          name +
          "\n" +
          "メールアドレス:" +
          email +
          "\n" +
          "【お問い合わせ内容】\n" +
          description,
      };
      const adress =
        "https://hooks.slack.com/services/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";

      fetch(adress, {
        method: "POST",
        body: JSON.stringify(payload),
      })
        .then((response) => {
          alert("送信が完了しました。追ってご連絡いたします!!");
          setDescription("");
          setEmail("");
          setName("");
        })
        .catch(() => {
          alert("送信に失敗しました。通信環境を整えて再度お試しください！");
        });
    }
  };

  return (
    <Wrapper>
      <form
        action="http://www2.tba.t-com.ne.jp/cgi-bin/form.cgi"
        method="post"
        name="mail_form"
      >
        <InputWrapper>
          <Input
            value={name}
            onChange={(e) => inputName(e)}
            type="text"
            placeholder="your name ..."
          />
          <Input
            value={email}
            onChange={(e) => inputEmail(e)}
            type="email"
            placeholder="your email ..."
          />
          <Textarea
            value={description}
            onChange={(e) => inputDescription(e)}
            placeholder="request ..."
            rows={4}
          />
        </InputWrapper>
        <input type="hidden" name="tomail" value="s22ah261@seinan-gakuin.jp" />
        <SubmitButton onClick={submitForm}>SUBMIT</SubmitButton>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 600px;
  margin: 0 auto;
  text-align: center;
`;

const InputWrapper = styled.div`
  display: flex;
  padding: 20px 0;
  flex-direction: column;
`;

const Input = styled.input`
  width: 90%;
  padding: 20px 0;
  text-align: center;
  font-size: 18px;
  margin: 20px auto;
  border: 2px solid #bbb;
`;

const Textarea = styled.textarea`
  width: 90%;
  text-align: center;
  border: 2px solid #bbb;
  margin: 20px auto;
  padding: 30px 0;
  font-size: 18px;
`;

const SubmitButton = styled.div`
  width: 70px;
  margin: 30px auto;
  padding: 25px;
  background-color: #222;
  color: #fff;
  border-radius: 30px;
  font-size: 18;
  cursor: pointer;
  &:hover {
    color: #222;
    background-color: #fff;
  }
`;
