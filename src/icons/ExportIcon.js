import ShareIcon from './icon/share-icon.png'
import Domain from './icon/domain.png'
import ExternalLink from './icon/external-link.png'
import TimeSpan from './icon/time-span.png'
import TwitterIcon from './icon/twitter.png'
import FaceBookIcon from './icon/facebook.png'
import TelegramIcon from './icon/telegram.png'
import DiscordIcon from './icon/discord.png'
import RedditIcon from './icon/reddit.png'
import Subscription from './icon/subscription.png'
import InstagramIcon from './icon/instagram.png'
import Documents from './icon/documents.png'
import NothinFound from './icon/nothing-found.png'
import FeaturesList from './icon/features-list.png'
import VideoIcon from './icon/video.png'
import ImageIcon from './icon/image.png'
import EthereumIcon from './icon/ethereum.png'
import CloseIcon from './icon/close.png'
import GuestMale from './icon/guest-male.png'
import FullImageIcon from './icon/full-image.png'
import NoImageIcon from './icon/no-image.png'
import QuestionMark from './icon/question-mark.png'
import LinkeDinIcon from './icon/linkedin-2.png'
import WalletIcon from './icon/wallet.png'
import LogInIcon from './icon/login.png'
import LogOutIcon from './icon/exit.png'
import SpinnerIcon from './icon/spinner.png'
import FullScreen from './icon/full-screen.png'
import Expand from './icon/expand.png'
import UndoIcon from './icon/undo.png'
import DashboardLayout from './icon/dashboard-layout.png'
import Exchange from './icon/exchange.png'
import Estimate from './icon/estimate.png'
import Analytics from './icon/analytics.png'
import ChnageIcon from './icon/change.png'
import InformationIcon from './icon/information.png'
import GasStation from './icon/gas-station.png'
import DirectionHorizontal from './icon/direction-horizontal.png'
import SettingsIcon from './icon/settings.png'
import GrowingMoney from './icon/growing-money.png'
import OrderHostory from './icon/order-history.png'
import ReceiveCash from './icon/receive-cash.png'
import MenuSquared from './icon/menu-squared.png'
import SideBarmenu from './icon/sidebar-menu.png'
import MenuBar from './icon/menu--v1.png'
import BrokenLink from './icon/broken-link.png'
import BankUsd from './icon/bank-usd.png'
import USD from './icon/us-dollar-circled.png'
import Chain from './icon/chain-intermidiate.png'
import Connected from './icon/connected.png'
import ARCFavi from './icon/faviconarc.ico'
import PnacakeSwapIcon from './icon/pancakeswap-cake-logo.png'
import BoggedFinanceIcon from './icon/bogged.png'
import PinkSaleIcon from './icon/pinkswap.png'
import ArcCoin from './icon/arccoin.png'
import HexBurner from './icon/hex-burner.png'
import CentralizedNetwork from './icon/centralized-network.png'
import BlockchainTech from './icon/blockchain-technology.png'
import InfoIcon from './icon/info.png'
import GoldBars from './icon/gold-bars.png'
const IconImage = {
    ShareIcon: ShareIcon,
    Domain: Domain,
    externallink: ExternalLink,
    TimeSpan: TimeSpan,

    twitter: TwitterIcon,
    facebook: FaceBookIcon,
    telegram: TelegramIcon,
    discord: DiscordIcon,
    reddit: RedditIcon,
    subscription: Subscription,
    instagram: InstagramIcon,
    documents: Documents,
    nothingFound: NothinFound,
    featuresList: FeaturesList,
    video: VideoIcon,
    image: ImageIcon,
    ethereum: EthereumIcon,
    close: CloseIcon,
    guest_male: GuestMale,
    fullimage: FullImageIcon,
    noimage: NoImageIcon,
    questionmark: QuestionMark,
    linkedin: LinkeDinIcon,
    wallet: WalletIcon,
    login: LogInIcon,
    logout: LogOutIcon,
    spinner: SpinnerIcon,
    fullscreen: FullScreen,
    expand: Expand,
    undo: UndoIcon,
    dashboard: DashboardLayout,
    exchange: Exchange,
    estimate: Estimate,
    analytics: Analytics,
    change: ChnageIcon,
    information: InformationIcon,
    gasstation: GasStation,
    directionhorizontal: DirectionHorizontal,
    settings: SettingsIcon,
    growingmoney: GrowingMoney,
    orderhistory: OrderHostory,
    receivecash: ReceiveCash,
    menusquared: MenuSquared,
    sidemenu: SideBarmenu,
    menubar: MenuBar,
    brokenlink: BrokenLink,
    bankusd: BankUsd,
    usd: USD,
    chain: Chain,
    connected: Connected,
    arcfavi: ARCFavi,
    pancake: PnacakeSwapIcon,
    bogged: BoggedFinanceIcon,
    pinkswap: PinkSaleIcon,
    arccoin: ArcCoin,
    hexburner: HexBurner,
    centralizednetwork: CentralizedNetwork,
    blockchaintechnology: BlockchainTech,
    info: InfoIcon,
    goldbars: GoldBars
}


const GetIcon = function ({ icon, classname, trigger }) {

    return (
        <div style={Styles.iconWrapper} className={classname ? classname : undefined} onClick={trigger}>
            <img style={Styles.iconImage} className={'icon-image'} src={IconImage[icon] ? IconImage[icon] : icon} />
        </div>
    )

}

export { GetIcon, IconImage }

const Styles = {
    iconWrapper: {
        width: 'clamp(35px, 35px, 35px)',
        height: 'clamp(35px, 35px, 35px)',
        padding: '.2rem',
        background: 'white',
        borderRadius:'50px',
        overflow:'hidden',
        display:'flex',
        placeItems:'center',
        placeContent:'center'
    },
    iconImage: {
        width: '100%',
        height: '100%'
    }
}
