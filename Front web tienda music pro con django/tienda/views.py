#from django.contrib.admin.views.decorators import staff_member_required
from django.shortcuts import render

# Create your views here.

def index(request):
    context={}
    return render(request, 'index.html', context)

def IniciarSesion(request):
    context={}
    return render(request, 'IniciarSesion.html', context)

def InicioSesion_vendedor(request):
    context={}
    return render(request, 'InicioSesion_vendedor.html', context)

def pedidos_vendedor(request):
    context={}
    return render(request, 'pedidos_vendedor.html', context)

def sesion_iniciada_exito_cliente(request):
    context={}
    return render(request, 'sesion_iniciada_exito_cliente.html', context)

def sesion_iniciada_exito_vendedor(request):
    context={}
    return render(request, 'sesion_iniciada_exito_vendedor.html', context)

def tipo_usuario(request):
    context={}
    return render(request, 'tipo_usuario.html', context)

def vista_cliente_2(request):
    context={}
    return render(request, 'vista_cliente_2.html', context)

def vista_cliente(request):
    context={}
    return render(request, 'vista_cliente.html', context)

def vista_vendedor(request):
    context={}
    return render(request, 'vista_vendedor.html', context)






