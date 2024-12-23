import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { useToast } from "@/hooks/use-toast";

type NotificationType = 'slot_invite' | 'slot_application' | 'feedback' | 'performance';

interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
}

interface NotificationState {
  notifications: Notification[];
}

type NotificationAction = 
  | { type: 'ADD_NOTIFICATION'; payload: Notification }
  | { type: 'MARK_AS_READ'; payload: string }
  | { type: 'CLEAR_ALL' };

const initialState: NotificationState = {
  notifications: []
};

const notificationReducer = (state: NotificationState, action: NotificationAction): NotificationState => {
  switch (action.type) {
    case 'ADD_NOTIFICATION':
      return {
        ...state,
        notifications: [action.payload, ...state.notifications]
      };
    case 'MARK_AS_READ':
      return {
        ...state,
        notifications: state.notifications.map(notification =>
          notification.id === action.payload
            ? { ...notification, read: true }
            : notification
        )
      };
    case 'CLEAR_ALL':
      return {
        ...state,
        notifications: []
      };
    default:
      return state;
  }
};

const NotificationContext = createContext<{
  state: NotificationState;
  addNotification: (type: NotificationType, title: string, message: string) => void;
  markAsRead: (id: string) => void;
  clearAll: () => void;
} | undefined>(undefined);

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(notificationReducer, initialState);
  const { toast } = useToast();

  const addNotification = (type: NotificationType, title: string, message: string) => {
    const notification: Notification = {
      id: Math.random().toString(36).substr(2, 9),
      type,
      title,
      message,
      timestamp: new Date(),
      read: false
    };
    
    dispatch({ type: 'ADD_NOTIFICATION', payload: notification });
    
    // Show toast for immediate feedback
    toast({
      title: notification.title,
      description: notification.message,
    });
  };

  const markAsRead = (id: string) => {
    dispatch({ type: 'MARK_AS_READ', payload: id });
  };

  const clearAll = () => {
    dispatch({ type: 'CLEAR_ALL' });
  };

  return (
    <NotificationContext.Provider value={{ state, addNotification, markAsRead, clearAll }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
};