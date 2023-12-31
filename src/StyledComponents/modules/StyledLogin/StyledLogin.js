import { forwardRef } from "react";
import styled from "styled-components";

export const LoginLayout = styled.div`
  width: 320px;
  margin: 100px auto;
`;

export const Logo = styled.h2`
  margin-bottom: 24px;
  cursor: pointer;
`;

export const Ir = styled.label`
  overflow: hidden;
  display: block;
  width: 0;
  height: 0;
  font-size: 0;
  line-height: 0;
  color: transparent;
  text-indent: -99999px;
`;

export const LoginInput = styled.input`
  border: 1px solid #8d9096;
  width: 100%;
  height: 50px;
  margin-top: 6px;
  border-radius: 8px;
  box-sizing: border-box;
  padding: 16px;
  outline: none;
  &:focus {
    border-color: var(--defaultColor);
  }
`;
export const LoginForwardRefInput = forwardRef(({ type, placeholder, name }, ref) => {
  return <LoginInput type={type} name={name} placeholder={placeholder} ref={(props) => (ref[name] = props)} />;
});
export const LoginBtn = styled.button`
  width: 100%;
  height: 50px;
  margin: 24px 0;
  box-sizing: border-box;
  background-color: var(--defaultColor);
  font-size: 16px;
  text-align: center;
  color: #fff;
  border-radius: 8px;
  cursor: pointer;
`;

export const Links = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #8d9096;
  margin: 24px 0;
`;

export const Box = styled.div`
  width: 1px;
  background: #8d9096;
  height: 12px;
  display: inline-block;
  margin: 0 14px;
`;

export const LinksA = styled.span`
  cursor: pointer;
`;

export const EasyLoginCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const EasyLogin = styled.div`
  color: #8d9096;
  font-size: 14px;
  text-align: center;
`;

export const HorizontalBox = styled.div`
  width: 34%;
  height: 1px;
  background: #8d9096;
`;

export const SnsBtn = styled.button`
  width: 320px;
  height: 50px;
  font-size: 16px;
  text-align: center;
  border-radius: 8px;
  border: 1px solid #d6d9df;
  color: #8d9096;
  margin-bottom: 6px;
  background: #fff;
  cursor: pointer;
`;

export const LoginGo = styled.div`
  color: #8d9096;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
`;
