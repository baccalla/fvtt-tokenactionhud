import { Logger } from './logger.js';
export { Logger } from './logger.js';
import * as systemSettings from './settings/systemSettings.js'

const updateSettings = (value) => { Logger.debug('Settings updated. Refreshing HUD'); if (game.tokenActionHUD)game.tokenActionHUD.updateSettings(); }

const app = 'token-action-hud';
export const registerSettings = function(system, rollHandlers) {
    game.settings.register(app,'rollHandler', {
        name : game.i18n.localize('tokenactionhud.settings.rollHandler.name'),
        hint : game.i18n.localize('tokenactionhud.settings.rollHandler.hint'),
        scope : 'world',
        config : true,
        type : String,
        choices : rollHandlers,
        default : 'core',
        onChange: value => { updateSettings(value); }
    });
    
    game.settings.register(app,'enabledForUser', {
        name : game.i18n.localize('tokenactionhud.settings.enabledForUser.name'),
        hint : game.i18n.localize('tokenactionhud.settings.enabledForUser.hint'),
        scope : 'client',
        config : true,
        type : Boolean,
        default : true,
        onChange: value => { updateSettings(value); }
    });

    game.settings.register(app,'pushCompendiumCategories', {
        name : game.i18n.localize('tokenactionhud.settings.pushCompendiumCategories.name'),
        hint : game.i18n.localize('tokenactionhud.settings.pushCompendiumCategories.hint'),
        scope : 'client',
        config : true,
        type : Boolean,
        default : false,
        onChange: value => { updateSettings(value); }
    });

    game.settings.register(app,'alwaysShowCompendiumCategories', {
        name : game.i18n.localize('tokenactionhud.settings.alwaysShowCompendiumCategories.name'),
        hint : game.i18n.localize('tokenactionhud.settings.alwaysShowCompendiumCategories.hint'),
        scope : 'client',
        config : true,
        type : Boolean,
        default : false,
        onChange: value => { updateSettings(value); }
    });

    game.settings.register(app,'onTokenHover', {
        name : game.i18n.localize('tokenactionhud.settings.onTokenHover.name'),
        hint : game.i18n.localize('tokenactionhud.settings.onTokenHover.hint'),
        scope : 'client',
        config : true,
        type : Boolean,
        default : false,
        onChange: value => { updateSettings(value); }
    });
   
    systemSettings.setSettings(system, app, updateSettings);
    
    game.settings.register(app,'playerPermission', {
        name : game.i18n.localize('tokenactionhud.settings.playerPermission.name'),
        hint : game.i18n.localize('tokenactionhud.settings.playerPermission.hint'),
        scope : 'world',
        config : true,
        type : Boolean,
        default : true,
        onChange: value => { updateSettings(value); }
    });
    
    game.settings.register(app,'debug', {
        name : game.i18n.localize('tokenactionhud.settings.debug.name'),
        hint : game.i18n.localize('tokenactionhud.settings.debug.hint'),
        scope : 'client',
        config : true,
        type : Boolean,
        default : false,
        onChange: value => { updateSettings(value); }
    });

    Logger.debug('available rollHandlers: ', rollHandlers);
}

export function get(setting) {
    return game.settings.get(app, setting);
}

export function set(setting, value) {
    game.settings.set(app, setting, value);
}
