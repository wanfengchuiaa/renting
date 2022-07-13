import {
  Button,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  Lazyload,
  search,
  Grid,
  GridItem,
  Icon,
  Cell,
  Picker,
  IndexBar,
  IndexAnchor,
  NavBar,
  Form,
  Field,
  DropdownMenu,
  DropdownItem,
  Area,
  Dialog,
  Popup,
  Card,
  Tag,
  Uploader
} from 'vant'
const elements = [
  Button,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  Lazyload,
  search,
  Grid,
  GridItem,
  Cell,
  Picker,
  IndexBar,
  IndexAnchor,
  NavBar,
  Form,
  Field,
  DropdownMenu,
  DropdownItem,
  Area,
  Dialog,
  Popup,
  Card,
  Tag,
  Icon,
  Uploader
]
export default function (Vue) {
  elements.forEach((item) => Vue.use(item))
}