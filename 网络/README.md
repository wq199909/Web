# 域名与DNS解析

www.baidu.com --> 域名

不能直接通过域名访问一台计算机

向浏览器输入一个url网址按回车

看浏览器对缓存
看本机host
看家用路由器
看上级路由器、城市路由器
看DNS服务器
看上级DNS服务器

# 三次握手四次挥手

**三次握手**

1. 客户端向服务器发送报文，表示想建立连接
2. 服务器收到报文，返回客户端报文，访问客户端是否准备好
3. 客户端向服务器发送报文，表示准备好了

**四次挥手**

1. 客户端发送报文告诉服务器结束连接
2. 服务器收到后发送确认报文
3. 服务端发送报文告诉客户端连接
4. 客户端收到后发送确认报文

