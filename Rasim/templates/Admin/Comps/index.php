<section class="content-header">
  <div class="container-fluid">
    <div class="row mb-2">
      <div class="col-sm-6">
        <h1>Элементы</h1>
      </div>
      <div class="col-sm-6">
        
      </div>
    </div>
  </div><!-- /.container-fluid -->
</section>



<!-- Main content -->
<section class="content">

  <!-- Default box -->
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">Элементы</h3>		
    </div>
    <div class="card-body p-0">
    <?php if(!empty($data)): ?>
      <table class="table table-striped comps-table">
        <thead>
            <tr>
                <th style="width: 1%">ID</th>
                <th style="width: 10%">Название</th>
                <th style="width: 20%">Картинка / Текст</th>
                <th style="width: 12%; text-align: right;">Редактирование</th>
            </tr>
        </thead>
        <tbody>
         	<?php foreach($data as $item): ?>
        		<tr>
        			<td>
        				<?=$item['id']?>
        			</td>
        			<td>
        				<b><?=$item['title']?></b>
        			</td>
        			<td>
        				<?php if( $item['img'] ): ?>
        					<img src="/img/comps/thumbs/<?= $item['img'] ?>" width="150" alt="">
        				<?php else: ?>
	        				<b><?=$item['body']?></b>
        				<?php endif; ?>
        			</td>
        			<td class="project-actions text-right">
                  <a class="btn btn-info btn-sm" href="/admin/comps/edit/<?=$item['id']?>?lang=ru">
                    <i class="fas fa-pencil-alt"></i>Редактировать
                  </a>
        				<?php # echo $this->Form->postLink('Удалить', "/admin/comps/delete/{$item['id']}", array('confirm' => 'Удалить Материал?', 'value'=>'465', 'class' => 'btn btn-danger btn-sm')) ?>
        			</td>
        		</tr>
        	<?php endforeach ?>
        </tbody>
      </table>
    <?php else: ?>
      <div class="emty_data">
        К сожалению в данном разделе еще не добавлена информация...
      </div> 
    <?php endif ?>
    </div>
    <!-- /.card-body -->
  </div>
  <!-- /.card -->

</section>

<ul class="pagination">
	<?php 
		$this->Paginator->options([
		    'url' => [
		        'lang' => $l,
		    ]
		]);
		echo $this->Paginator->numbers([
			'first' => 1, 'last' => 1, 'modulus' => 2, 
		]); 
	?>
</ul>