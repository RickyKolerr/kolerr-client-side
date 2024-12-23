import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNotifications } from "@/contexts/NotificationContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

export function NotificationBell() {
  const { state, markAsRead, clearAll } = useNotifications();
  const unreadCount = state.notifications.filter(n => !n.read).length;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <Badge 
              className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center bg-red-500"
            >
              {unreadCount}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <div className="flex items-center justify-between px-4 py-2 border-b">
          <h4 className="font-semibold">Notifications</h4>
          {state.notifications.length > 0 && (
            <Button variant="ghost" size="sm" onClick={clearAll}>
              Clear all
            </Button>
          )}
        </div>
        <div className="max-h-96 overflow-y-auto">
          {state.notifications.length === 0 ? (
            <div className="p-4 text-center text-muted-foreground">
              No notifications
            </div>
          ) : (
            state.notifications.map((notification) => (
              <DropdownMenuItem
                key={notification.id}
                className={`p-4 cursor-pointer ${!notification.read ? 'bg-muted/50' : ''}`}
                onClick={() => markAsRead(notification.id)}
              >
                <div className="space-y-1">
                  <p className="font-medium">{notification.title}</p>
                  <p className="text-sm text-muted-foreground">{notification.message}</p>
                  <p className="text-xs text-muted-foreground">
                    {new Date(notification.timestamp).toLocaleString()}
                  </p>
                </div>
              </DropdownMenuItem>
            ))
          )}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}