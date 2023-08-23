import React from 'react';
import DesktopChatVersion from './components/desktop-chat-version/desktop-chat-version';
import { isMobile } from 'shared/lib/helpers/isMobile';
import MobileChatVersion from './components/mobile-chat-version/mobile-chat-version';

const SupportChat: React.FC = () => {
    if(isMobile) {
        return <MobileChatVersion />
    }

    return <DesktopChatVersion />
}

export default SupportChat;