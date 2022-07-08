import Vue from "vue";
import {
  Button,
  Form,
  FormItem,
  Input,
  Card,
  MessageBox,
  Message,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Menu,
  Col,
  Submenu,
  MenuItemGroup,
  MenuItem,
  Breadcrumb,
  BreadcrumbItem,
  Table,
  TableColumn,
  Pagination,
  Dialog,
  DatePicker,
  Radio,
  Loading,
  Checkbox,
  Tree,
} from "element-ui";

Vue.use(Button);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Card);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Menu);
Vue.use(Col);
Vue.use(Submenu);
Vue.use(MenuItemGroup);
Vue.use(MenuItem);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Pagination);
Vue.use(Dialog);
Vue.use(DatePicker);
Vue.use(Radio);
Vue.use(Checkbox);
Vue.use(Tree);

Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
