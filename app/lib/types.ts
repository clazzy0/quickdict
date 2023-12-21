export type AuthModalProps = {
  option: "login" | "kickoff";
  setOption: (option: "login" | "kickoff") => void;
  onClose: () => void;
};
