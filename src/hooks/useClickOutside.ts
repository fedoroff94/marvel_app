import { useCallback, useEffect } from "react"

export const useClickOutside = (ref: any, callback: () => void) => {
    
    const listener = useCallback((event: MouseEvent) => {
        if(!ref.current.contains(event.target)) {
            callback();
        }
    }, [ref, callback]);
    
    useEffect(() => {
        // clickOutsideSubscriber.subscribe(listener);

        // return () => clickOutsideSubscriber.unsubscribe(listener);
        document.addEventListener('click', listener);

        return () => { document.removeEventListener('click', listener) };
    }, [listener]);
}

// class Subscriber {
//     constructor() {
//       this.listeners = []
//       document.addEventListener('click', event => this.notify(event));
//     }
  
//     subscribe(listener) {
//       this.listeners.push(listener)
//     }
  
//     unsubscribe(listener) {
//       this.listeners = this.listeners.filter(obs => obs !== listener)
//     }
  
//     notify(action) {
//       this.listeners.forEach(listener => {
//         listener(action)
//       })
//     }
//   }