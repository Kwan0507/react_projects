import { forwardRef, useImperativeHandle, useRef } from "react";
/**
 * export: AlertModal 컴포넌트(함수)/변수/상수 등을 외부로 공개하기 위한 방법.
 * import {AlertModal} from "./path";
 *
 * export default: AlertModal 컴포넌트(함수)/변수/상수 등을 외부로 공개하기 위한 방법.
 *     AlertModal.js 파일을 Import 했을 때, 대표 컴포넌트/함수/변수/상수를 공개하는 방법.
 * 하나의 js 파일에 하나의 export default만 작성 가능.
 * 한 파일에서 export default를 여러번 작성 불가.
 * import AlertModal, {Other Component} from "./path";
 *
 */

// ref 를 props로 받아오기 위해서 forwordRef로 변경
// export default function AlertModal({ children }) {
const AlertModal = forwardRef(({ onClose, children }, ref) => {
  const modal = useRef();

  // props로 전달받은 ref의 current 값을 주입시키는 함수
  // ref로 modal을 제어하려면 useImperativeHandle 사용
  useImperativeHandle(ref, () => {
    // 반환을 해야 ref에 할당된다
    return {
      open() {
        modal.current.showModal();
      },
      close() {
        modal.current.close();
      },
    };
  });

  return (
    <dialog className="modal" ref={modal}>
      <div className="modal-body">
        <section className="modal-close-button" onClick={onClose}>
          X
        </section>
        {children}
      </div>
    </dialog>
  );
});

export default AlertModal;
