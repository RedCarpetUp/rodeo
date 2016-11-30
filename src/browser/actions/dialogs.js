import registration from '../services/registration';

export function showAboutRodeo() {
  const type = 'ADD_MODAL_DIALOG',
    contentType = 'ABOUT_RODEO';

  return {type, contentType};
}

export function showAboutStickers() {
  return {type: 'ADD_MODAL_DIALOG', contentType: 'ABOUT_STICKERS', title: 'Stickers'};
}

export function showPreferences() {
  return {type: 'ADD_MODAL_DIALOG', contentType: 'PREFERENCES', title: 'Preferences'};
}

export function showAcknowledgements() {
  return {type: 'ADD_MODAL_DIALOG', contentType: 'ACKNOWLEDGEMENTS', title: 'Acknowledgements'};
}

export function showNotification(content) {
  return {type: 'ADD_MODAL_DIALOG', contentType: 'MARKED', content, title: 'Notification'};
}

export function showRegisterRodeo(content) {
  return function (dispatch) {
    if (registration.shouldShowDialog()) {
      registration.rememberShowedDialog();
      dispatch({type: 'ADD_MODAL_DIALOG', contentType: 'REGISTER_RODEO', content, title: 'Register'});
    }
  };
}

function showAskQuit() {
  return {type: 'ADD_MODAL_DIALOG', contentType: 'ASK_QUIT', title: 'Quit'};
}

export default {
  showAboutRodeo,
  showAboutStickers,
  showAcknowledgements,
  showAskQuit,
  showPreferences,
  showNotification,
  showRegisterRodeo
};