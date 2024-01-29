import { useImperativeHandle, useLayoutEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface ToastProps {
  message: string;
  timeout?: number;
  key?: string;
  onDismiss?: () => void | undefined;
}

type ToastRefProps = {
  show: (data: ToastProps) => void;
};

export const GlobalToast = () => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const toastRef = useRef<ToastRefProps>(null);

  const handleShowToast = ({ timeout = 3000, ...toast }: ToastProps) => {
    setToasts((prevToasts) => [...prevToasts, toast]);

    setTimeout(() => {
      handleDismissToast(toast.message);
    }, timeout);
  };

  const handleDismissToast = (message: string) => {
    setToasts((prevToasts) =>
      prevToasts.filter((toast) => {
        if (toast.message === message) {
          toast.onDismiss?.();
          return false;
        }
        return true;
      })
    );
  };

  useImperativeHandle(toastRef, () => ({
    show: handleShowToast,
  }));

  useLayoutEffect(() => {
    Toast.setToastRef(toastRef);
  }, []);

  return (
    <View style={styles.container}>
      {toasts.map((toast) => (
        <TouchableOpacity
          key={toast?.key || toast.message}
          onPress={() => handleDismissToast(toast.message)}
          style={styles.toast}
        >
          <Text style={styles.text}>{toast?.message}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export class Toast {
  static toastRef: React.RefObject<ToastRefProps>;

  static setToastRef(ref: React.RefObject<ToastRefProps>) {
    this.toastRef = ref;
  }

  static show(data: ToastProps) {
    this.toastRef.current.show(data);
  }
}

const styles = StyleSheet.create({
  container: {
    top: 100,
    width: "100%",
    position: "absolute",
    gap: 10,
  },
  toast: {
    width: "90%",
    borderRadius: 10,
    alignSelf: "center",
    padding: 10,
    backgroundColor: "green",
  },
  text: {
    fontSize: 18,
    color: "white",
  },
});
