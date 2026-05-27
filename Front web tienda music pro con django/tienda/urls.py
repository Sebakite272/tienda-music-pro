from django.contrib import admin
from django.urls import path
from . import views
#from tienda.admin_views import index as tienda_admin_index
#from django.contrib.auth.decorators import login_required

app_name = 'tienda'

urlpatterns = [
       path('index/', views.index, name='index'),
       path('IniciarSesion/', views.IniciarSesion, name='IniciarSesion'),
       path('vista_cliente_2', views.vista_cliente_2, name='vista_cliente_2'),
       path('InicioSesion_vendedor', views.InicioSesion_vendedor, name='InicioSesion_vendedor'),
       path('pedidos_vendedor', views.pedidos_vendedor, name='pedidos_vendedor'),
       path('sesion_iniciada_exito_cliente', views.sesion_iniciada_exito_cliente, name='sesion_iniciada_exito_cliente'),
       path('sesion_iniciada_exito_vendedor', views.sesion_iniciada_exito_vendedor, name='sesion_iniciada_exito_vendedor'),
       path('tipo_usuario/', views.tipo_usuario, name='tipo_usuario'),
       path('vista_cliente', views.vista_cliente, name='vista_cliente'),
       path('vista_vendedor', views.vista_vendedor, name='vista_vendedor'),
       #path('admin/tienda/index', tienda_admin_index, name='tienda_admin_index'),
       #path('admin', admin.site.urls),
       
       
       
]
