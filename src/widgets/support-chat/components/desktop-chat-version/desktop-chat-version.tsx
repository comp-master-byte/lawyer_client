import React from 'react';
import styles from "./desktop-chat-version.module.scss";
import { useSupportChat } from 'widgets/support-chat/lib/hooks/useSupportChat';
import SupportChatButton from 'features/support-chat/components/support-chat-button/support-chat-button';
import LegalAdvice from 'entities/support-chat/legal-advice/legal-advice';
import SupportChatModal from 'entities/support-chat/support-chat-modal/support-chat-modal';
import MyButton from 'shared/ui/MyButton/MyButton';
import { useAppDispatch, useTypedSelector } from 'shared/lib/hooks/redux';
import { fetchMessageNode } from 'widgets/support-chat/model/async-actions';
import { supportChatSlice } from 'widgets/support-chat/model/supportChatSlice';

const DesktopChatVersion: React.FC = () => {
    const {
        isSupportChatVisible,
        closeSupportChat,
        isLegalAdviceModalVisible,
        openLegalAdviceModal,
        closeLegalAdviceModal,
        backToSupportChatFromLegalModal
    } = useSupportChat();

    const {data, isLoading} = useTypedSelector(state => state.supportChatSlice);

    const dispatch = useAppDispatch();

    const moveToTheNextChain = function(nodeId: number) {
        dispatch(fetchMessageNode(nodeId));
        dispatch(supportChatSlice.actions.pushChainToArray(nodeId));
    }

    return (
        <div className={styles.desktopChatVersion}>
            <SupportChatButton />

            <LegalAdvice 
                isModalVisible={isLegalAdviceModalVisible} 
                closeLegalAdviceModal={closeLegalAdviceModal} 
                backToSupportChatFromLegalModal={backToSupportChatFromLegalModal}
            />

            <div className={styles.chatWrapper}>
                <SupportChatModal
                    chainData={data}
                    isChainLoading={isLoading}
                    closeSupportChat={closeSupportChat}
                    moveToTheNextChain={moveToTheNextChain}
                    isSupportChatVisible={isSupportChatVisible}
                />

                <MyButton 
                    color='secondary' 
                    variant='contained'
                    size='large' 
                    btnClassName={styles.lawyerConsultationButton}
                    onClick={openLegalAdviceModal}
                >
                    Нужна консультация юриста
                </MyButton>
            </div>
        </div>
    )
}

export default DesktopChatVersion;